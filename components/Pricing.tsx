'use client';
import { useState } from 'react';

const PLANS = [
  {
    name:'Starter', desc:'Perfect for small fleets under 10 vehicles', monthly:29, annual:23,
    cta:'Get Started', ctaCls:'btn-outline',
    features:[
      {on:true,  t:'GPS Tracking (30s update)'},
      {on:true,  t:'7-day trip history'},
      {on:true,  t:'Basic alerts & notifications'},
      {on:true,  t:'Mobile app access'},
      {on:true,  t:'Email support'},
      {on:false, t:'Live camera streaming'},
      {on:false, t:'AI driver safety'},
      {on:false, t:'Cloud video storage'},
    ],
  },
  {
    name:'Professional', desc:'Full camera + GPS for growing fleets', monthly:59, annual:47,
    featured:true, cta:'Get Started', ctaCls:'btn-primary',
    features:[
      {on:true, t:'GPS Tracking (10s update)'},
      {on:true, t:'30-day trip history'},
      {on:true, t:'Live camera streaming'},
      {on:true, t:'30-day cloud video storage'},
      {on:true, t:'AI driver safety scoring'},
      {on:true, t:'Geofencing & alerts'},
      {on:true, t:'RUC reporting'},
      {on:true, t:'NZ phone support'},
    ],
  },
  {
    name:'Enterprise', desc:'Custom solutions for large operations',
    cta:'Contact Sales', ctaCls:'btn-outline',
    features:[
      {on:true, t:'Everything in Professional'},
      {on:true, t:'90-day cloud video storage'},
      {on:true, t:'Multi-camera per vehicle'},
      {on:true, t:'API & integrations'},
      {on:true, t:'Custom reporting & dashboards'},
      {on:true, t:'Dedicated account manager'},
      {on:true, t:'On-site installation NZ-wide'},
      {on:true, t:'SLA & priority support'},
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Simple Pricing</div>
          <h2 className="section-title">Transparent plans, no surprises</h2>
          <p className="section-subtitle">Monthly subscriptions with no lock-in contracts. Hardware available for purchase or lease.</p>
        </div>

        <div className="price-toggle">
          <button className={`toggle-btn${!annual?' toggle-active':''}`} onClick={()=>setAnnual(false)}>Monthly</button>
          <button className={`toggle-btn${annual?' toggle-active':''}`} onClick={()=>setAnnual(true)}>
            Annual <span className="save-badge">Save 20%</span>
          </button>
        </div>

        <div className="pricing-grid">
          {PLANS.map(({ name, desc, monthly, annual: ann, featured, cta, ctaCls, features }) => (
            <div key={name} className={`price-card${featured?' price-card-featured':''}`}>
              {featured && <div className="price-badge">Most Popular</div>}
              <h3>{name}</h3>
              <p className="price-desc">{desc}</p>
              <div className="price-amount-wrap">
                {monthly ? (
                  <>
                    <span className="price-currency">$</span>
                    <span className="price-num">{annual ? ann : monthly}</span>
                    <span className="price-period">/vehicle/mo</span>
                  </>
                ) : (
                  <span className="price-custom">Custom</span>
                )}
              </div>
              <ul className="price-features">
                {features.map(({ on, t }) => (
                  <li key={t} className={on?'':'off'}>
                    <span className={on?'price-check':''}>{on?'✓':'✗'}</span>{t}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${ctaCls} btn-full`}>{cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
