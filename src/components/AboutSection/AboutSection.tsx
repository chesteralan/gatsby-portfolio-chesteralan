import React from "react";
import { useStaticQuery, graphql } from "gatsby";

type Props = {};

function AboutSection({}: Props) {
  const data = useStaticQuery(graphql`
    query {
      contentYaml(
        fields: {
          fileName: { eq: "page-sections-about" }
          parentFolder: { eq: "content" }
        }
      ) {
        enabled
        section_title
        display_name
        title
        photo
        description
        education {
          course
          graduated
          school
          started
        }
        awards {
          sponsor
          title
          year
        }
        cv_link
      }
    }
  `);

  const {
    enabled,
    section_title,
    display_name,
    title,
    photo,
    description,
    education,
    awards,
    cv_link,
  } = data.contentYaml;

  if (!enabled) return <></>;

  return (
    <section id="about">
      <div className="container">
        <div className="section-title h2 text-center mb-8">
          <h2 className="mb-0">{section_title}</h2>
          <span className="title-letter">{section_title.charAt(0)}</span>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 d-none d-lg-block">
            <img className="img-fluid w-100 rounded" src={photo} alt="" />
          </div>
          <div className="col-lg-8">
            <h3>{display_name}</h3>
            <p className="lead">{title}</p>
            <div
              className="mb-5"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <div className="row mb-8">
              <div className="col-md-6 mb-5 mb-md-0">
                {education.length > 0 && <h4 className="mb-4">Education</h4>}
                {education.map(
                  (
                    {
                      course,
                      school,
                      started,
                      graduated,
                    }: {
                      course: string;
                      school: string;
                      started: string;
                      graduated: string;
                    },
                    index: number
                  ) => (
                    <div key={index} className="mb-3">
                      <p className="h5">{course}</p>
                      <p>
                        {school}, {started}{" "}
                        {graduated !== "" && graduated ? `- ${graduated}` : ""}
                      </p>
                    </div>
                  )
                )}
              </div>

              <div className="col-md-6">
                {awards.length > 0 && <h4 className="mb-4">Awards</h4>}
                {awards.map(
                  (
                    {
                      sponsor,
                      title,
                      year,
                    }: { sponsor: string; title: string; year: string },
                    index: number
                  ) => (
                    <div key={index} className="mb-3">
                      <p className="h5">{title}</p>
                      <p>
                        {sponsor}, {year}
                      </p>
                    </div>
                  )
                )}
              </div>

              {cv_link && (
                <a href={cv_link} target="_blank" className="btn btn-primary mt-5 mx-3">
                  Download CV
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
