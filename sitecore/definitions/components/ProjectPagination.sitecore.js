import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
    manifest.addComponent({
      name: 'ProjectPagination',
      icon: SitecoreIcon.DocumentTag,
      fields: [
        { name: 'heading', type: CommonFieldTypes.SingleLineText },
        { name: 'bgImage', type: CommonFieldTypes.Image },
        { name: 'link', type: CommonFieldTypes.GeneralLink },
        { name: 'class', type: CommonFieldTypes.SingleLineText},
      ],
      /*
      If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
      register it here, or components added to that placeholder will not be returned by Sitecore:
      placeholders: ['exposed-placeholder-name']
      */
    });
  }