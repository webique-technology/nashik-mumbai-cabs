"use client"
import React, { useState } from "react"
import { Accordion, Container, Row, Col } from "react-bootstrap"

export const FaqSec = () => {
    const faqData = [
        { quest: "Can I get a refund ticket ?", ans: "Metus vulputate eu scelerisque felis imperdiet. At in tellus integer feugiat scelerisque varius morbi enim nunc." },
        { quest: "My Discount Code is not Working, What do I do?", ans: "Metus vulputate eu scelerisque felis imperdiet. At in tellus integer feugiat scelerisque varius morbi enim nunc." },
        { quest: "What Destinations Do You Specialize In?", ans: "Metus vulputate eu scelerisque felis imperdiet. At in tellus integer feugiat scelerisque varius morbi enim nunc." },
        { quest: "What is Your Cancellation Policy?", ans: "Metus vulputate eu scelerisque felis imperdiet. At in tellus integer feugiat scelerisque varius morbi enim nunc." },
        { quest: "What travel documents do I need?", ans: "Metus vulputate eu scelerisque felis imperdiet. At in tellus integer feugiat scelerisque varius morbi enim nunc." },
        { quest: "Do You Offer Travel Insurance?", ans: "Metus vulputate eu scelerisque felis imperdiet. At in tellus integer feugiat scelerisque varius morbi enim nunc." },
        { quest: "How many People can stay in the Hotel?", ans: "Metus vulputate eu scelerisque felis imperdiet. At in tellus integer feugiat scelerisque varius morbi enim nunc." },
        { quest: "How to extend the support?", ans: "Metus vulputate eu scelerisque felis imperdiet. At in tellus integer feugiat scelerisque varius morbi enim nunc." },
    ];

    // Splitting data up front cleanly
    const leftColumnFaqs = faqData.slice(0, 4);
    const rightColumnFaqs = faqData.slice(4, 8);

    return (
        <section className="faq-section section-padding position-relative">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="section-title text-dark">
                        Frequently Asked <span className="title-highlight">Questions</span>
                    </h2>
                </div>

                {/* CRITICAL FIX: Single Accordion wrapper containing unique string keys for all items */}
                <Accordion defaultActiveKey="" className="unified-faq-accordion">
                    {/* Note: Fix layout typo by changing 'ms={6}' to Bootstrap 'md={6}' */}
                    <Row className="gy-4">
                        
                        {/* Left Column */}
                        <Col md={6} xs={12} className="d-flex flex-column gap-3">
                            {leftColumnFaqs.map((item, i) => {
                                const currentId = i + 1;
                                return (
                                    <Accordion.Item eventKey={`faq-${currentId}`} key={`left-${i}`} className="border rounded-3 overflow-hidden">
                                        <Accordion.Header className="fw-semibold">{currentId}. {item.quest}</Accordion.Header>
                                        <Accordion.Body className="text-muted">{item.ans}</Accordion.Body>
                                    </Accordion.Item>
                                );
                            })}
                        </Col>

                        {/* Right Column */}
                        <Col md={6} xs={12} className="d-flex flex-column gap-3">
                            {rightColumnFaqs.map((item, i) => {
                                const currentId = i + 5;
                                return (
                                    <Accordion.Item eventKey={`faq-${currentId}`} key={`right-${i}`} className="border rounded-3 overflow-hidden">
                                        <Accordion.Header className="fw-semibold">{currentId}. {item.quest}</Accordion.Header>
                                        <Accordion.Body className="text-muted">{item.ans}</Accordion.Body>
                                    </Accordion.Item>
                                );
                            })}
                        </Col>

                    </Row>
                </Accordion>
            </Container>
        </section>
    );
};