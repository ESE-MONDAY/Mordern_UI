import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './import';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alT='GOOGLE' />
    </div>
    <div>
      <img src={slack} alt="slack" />
    </div>
    <div>
      <img src={atlassian} alt='atlassian' />
    </div>
    <div>
      <img src={dropbox} alt='dropbox' />
    </div>
    <div>
      <img src={shopify} alt='shopify' />
    </div>
  </div>
);

export default Brand;