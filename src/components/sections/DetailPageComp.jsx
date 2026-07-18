import React from "react";
import { BookingForm } from "./CommonSec";
import { Col, Row } from "react-bootstrap";
import { LinkPillBtn } from "../ui/Buttons";
import { PhoneCall } from "lucide-react";

export const DetailPage1 = ({ dataObject }) => {
  const data = dataObject;
  return (
    <>
      <main className="py-5 bg-white text-dark">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* Main Layout Content Column */}
            <div className="col-12 col-lg-7">
              <article className="data-details-page px-2">
                {/* 1. Dynamic Header Image Banner */}
                {data.image && (
                  <div className="w-100 overflow-hidden rounded-3 shadow-sm mb-4">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="img-fluid w-100 rounded-3"
                      style={{ maxHeight: "460px", objectFit: "cover" }}
                    />
                  </div>
                )}

                {/* 2. Primary Hero Header */}
                <header className="mb-4">
                  {data.title && <h1 className="detail-h1">{data.title}</h1>}
                  <div className="text-secondary lh-base fs-6">
                    {data.intro && <p className="mb-3">{data.intro}</p>}
                    {data.fleetDescription && (
                      <p className="mb-0">{data.fleetDescription}</p>
                    )}
                  </div>
                </header>

                {/* 3. DYNAMIC CONTENT BLOCK ENGINE */}
                {data.contentBlocks &&
                  data.contentBlocks.map((block, index) => {
                    // Renders standard text layout sections
                    if (block.type === "text") {
                      return (
                        <section key={index} className="mb-4 pt-3 border-top">
                          {block.heading && (
                            <h2 className="h3 fw-bold text-dark mb-3">
                              {block.heading}
                            </h2>
                          )}
                          <p className="text-secondary lh-base fs-6">
                            {block.content}
                          </p>
                        </section>
                      );
                    }

                    // Renders highlighted pricing callout boxes
                    if (block.type === "callout") {
                      return (
                        <section
                          key={index}
                          className="mb-4 p-4 bg-light rounded-3 border-start border-warning border-4 shadow-sm"
                        >
                          {block.heading && (
                            <h2 className="h4 fw-bold text-dark mb-2">
                              📍 {block.heading}
                            </h2>
                          )}
                          <p className="text-secondary lh-base mb-0">
                            {block.content}
                          </p>
                        </section>
                      );
                    }

                    // Renders listing layouts (Features / Places to visit)
                    if (block.type === "list") {
                      return (
                        <section key={index} className="mb-4 pt-3 border-top">
                          {block.heading && (
                            <h2 className="h3 fw-bold text-dark mb-3">
                              {block.heading}
                            </h2>
                          )}
                          {block.intro && (
                            <p className="text-secondary fw-medium mb-3">
                              {block.intro}
                            </p>
                          )}

                          <div className="row g-2 mb-3">
                            {block.items &&
                              block.items.map((item, listIdx) => (
                                <div key={listIdx} className="col-12 col-md-6">
                                  <div className="d-flex align-items-start p-2 bg-light rounded border border-light-subtle h-100">
                                    <span className="text-success fw-bold me-2 px-1">
                                      ✓
                                    </span>
                                    <span className="text-secondary small fw-medium">
                                      {item}
                                    </span>
                                  </div>
                                </div>
                              ))}
                          </div>

                          {block.closing && (
                            <p className="text-secondary lh-base mt-2">
                              {block.closing}
                            </p>
                          )}
                        </section>
                      );
                    }

                    return null;
                  })}

                {/* 4. Bottom Custom Promotion Banner */}
                {data.longDistance && (
                  <section className="">
                    <h3 className="h4 fw-bold mb-3 text-warning">
                      {data.longDistance.heading}
                    </h3>

                    {Array.isArray(data.longDistance.content) ? (
                      data.longDistance.content.map((value, i) => (
                        <p
                          key={i}
                          className="text-light-subtle fs-6 mb-3 opacity-75 lh-base"
                        >
                          {value}
                        </p>
                      ))
                    ) : (
                      <p className="text-light-subtle fs-6 mb-4 opacity-75 lh-base">
                        {data.longDistance.content}
                      </p>
                    )}

                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 pt-4 border-top border-secondary">
                      <span className="fw-bold text-uppercase tracking-wide text-warning small mb-2 mb-sm-0">
                        {data.longDistance.closing}
                      </span>
                    </div>
                  </section>
                )}
              </article>
            </div>

            {/* Sidebar Area with Booking Form */}
            <div className="col-12 col-lg-5">
              <div className="position-sticky" style={{ top: "2rem" }}>
                <BookingForm btnClass="btn-square-primary" />

                <Row className="g-4 mt-2">
                  <Col>
                    <LinkPillBtn
                      href={"tel:+919822393852"}
                      icon={<PhoneCall size={18}/>}
                      btnText={"Call Us"}
                      varaint="pill-btn primary rounded-2 text-center w-100 d-block"
                    />
                  </Col>
                  <Col>
                    <LinkPillBtn
                      href={`https://wa.me/1234567890?text=${encodeURIComponent("Hello! I want to book a taxi request.")}`}
                      target="_blank"
                      btnText={"Contact Us"}
                      img={"/images/whatsapp.svg"}
                      varaint="pill-btn pill-btn-whatsapp gap-2 rounded-2 text-center w-100 d-block"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
