// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import packageJson from '../../../package.json';

/**
 * Adds the Journal component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'JournalArticle',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'tag', type: CommonFieldTypes.SingleLineText },
      { name: 'heroImage', type: CommonFieldTypes.Image },
      { name: 'content', type: CommonFieldTypes.RichText },
      { name: 'socialFb', type: CommonFieldTypes.GeneralLink },
      { name: 'socialTw', type: CommonFieldTypes.GeneralLink },
      { name: 'socialLi', type: CommonFieldTypes.GeneralLink },
      { name: 'tagList', type: CommonFieldTypes.ContentList,         
        source: `dataSource=/sitecore/content/${
        packageJson.config.appName
      }/Content/JournalTags`, }
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
