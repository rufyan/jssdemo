import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'CaseStudyHeader',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'bgColor', type: CommonFieldTypes.SingleLineText },
      { name: 'link', type: CommonFieldTypes.GeneralLink },
      { name: 'title1', type: CommonFieldTypes.SingleLineText },
      { name: 'title2', type: CommonFieldTypes.SingleLineText },      
      { name: 'bgImage', type: CommonFieldTypes.Image },
    ],
  });
}