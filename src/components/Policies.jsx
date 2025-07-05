import React, { useEffect } from 'react';
import './Policies.css';

const Policies = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const cancellationRules = [
    {
      period: 'More than 45 days before departure',
      charge: 'No cancellation charge',
      color: '#10b981'
    },
    {
      period: 'Between 45 and 30 days before departure',
      charge: '50% of total tour cost',
      color: '#f59e0b'
    },
    {
      period: 'Between 30 days and 15 days before departure',
      charge: '75% of total tour cost',
      color: '#f97316'
    },
    {
      period: 'Between 15 days and 07 days before departure',
      charge: '90% of total tour cost',
      color: '#ef4444'
    },
    {
      period: 'Less than 07 days before departure',
      charge: '100% of total tour cost',
      color: '#dc2626'
    }
  ];

  return (
    <section id="policies" className="policies section">
      <div className="container">
        <div className="section-header text-center animate-on-scroll fade-up">
          <h2>Our Policies</h2>
          <p>Clear and transparent policies for your peace of mind</p>
        </div>
        
        <div className="policies-content">
          <div className="policy-section animate-on-scroll fade-left">
            <div className="policy-card">
              <div className="policy-header">
                <div className="policy-icon">📋</div>
                <h3>Cancellation Policy</h3>
              </div>
              <p className="policy-intro">
                Due to any unfortunate circumstances, if any customers cannot be able to attend the tour, 
                the cancellation charge will be as follows:
              </p>
              
              <div className="cancellation-rules">
                {cancellationRules.map((rule, index) => (
                  <div 
                    key={index} 
                    className={`rule-item animate-on-scroll fade-up`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="rule-period">
                      <span className="period-text">{rule.period}</span>
                    </div>
                    <div className="rule-charge" style={{color: rule.color}}>
                      <span className="charge-text">{rule.charge}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="policy-note animate-on-scroll fade-up">
                <div className="note-icon">✈️</div>
                <p>
                  <strong>Flight tickets:</strong> Cancellation charges will be charged from your money 
                  as per the Airline policy.
                </p>
              </div>
            </div>
          </div>
          
          <div className="policy-section animate-on-scroll fade-right">
            <div className="policy-card">
              <div className="policy-header">
                <div className="policy-icon">💰</div>
                <h3>Refund Policy</h3>
              </div>
              <div className="refund-content">
                <div className="refund-step animate-on-scroll scale-in">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Immediate Processing</h4>
                    <p>Our payment process submits the refund immediately upon approval.</p>
                  </div>
                </div>
                
                <div className="refund-step animate-on-scroll scale-in">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Quick Processing</h4>
                    <p>We make every attempt to process the refund as quickly as possible.</p>
                  </div>
                </div>
                
                <div className="refund-step animate-on-scroll scale-in">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Bank Processing Time</h4>
                    <p>Your financial institution can take up to 4 to 7 working days for the refund to reflect in your bank account/card.</p>
                  </div>
                </div>
              </div>
              
              <div className="policy-highlight animate-on-scroll fade-up">
                <div className="highlight-icon">⚡</div>
                <p>We prioritize fast and transparent refund processing for your convenience.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="policies-footer animate-on-scroll fade-up">
          <div className="footer-content">
            <h4>Need Clarification?</h4>
            <p>If you have any questions about our policies, please don't hesitate to contact our customer service team.</p>
            <a href="#contact" className="btn btn-primary">Contact Support</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;