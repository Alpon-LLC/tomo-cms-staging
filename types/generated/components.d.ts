import type { Schema, Struct } from '@strapi/strapi';

export interface CabinTypeCabinType extends Struct.ComponentSchema {
  collectionName: 'components_cabin_type_cabin_types';
  info: {
    displayName: 'Cabin type';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DestinationSection2DestinationSection2
  extends Struct.ComponentSchema {
  collectionName: 'components_destination_section_2_destination_section_2s';
  info: {
    displayName: 'Destination Section 2';
  };
  attributes: {
    leftBodyParagraph: Schema.Attribute.Text;
    leftTitleParagraph: Schema.Attribute.String & Schema.Attribute.Required;
    rightBodyParagraph: Schema.Attribute.Text;
    rightTitleParagraph: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralAccordionIItem extends Struct.ComponentSchema {
  collectionName: 'components_general_accordion_i_items';
  info: {
    displayName: 'AccordionIItem';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface GeneralFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_general_footer_columns';
  info: {
    displayName: 'FooterColumn';
  };
  attributes: {
    links: Schema.Attribute.Component<'general.link', true>;
  };
}

export interface GeneralIconFeature extends Struct.ComponentSchema {
  collectionName: 'components_general_icon_features';
  info: {
    displayName: 'IconFeature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface GeneralImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_general_image_galleries';
  info: {
    displayName: 'ImageGallery';
  };
  attributes: {
    caption: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface GeneralLanguageOption extends Struct.ComponentSchema {
  collectionName: 'components_general_language_options';
  info: {
    displayName: 'LanguageOption';
  };
  attributes: {
    code: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface GeneralLink extends Struct.ComponentSchema {
  collectionName: 'components_general_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    openInNewTab: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface GeneralLocactionItems extends Struct.ComponentSchema {
  collectionName: 'components_general_locaction_items';
  info: {
    displayName: 'locactionItems';
  };
  attributes: {
    isFeatured: Schema.Attribute.Boolean;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface GeneralLocationItems extends Struct.ComponentSchema {
  collectionName: 'components_general_location_items';
  info: {
    displayName: 'locationItems';
  };
  attributes: {
    isFeatured: Schema.Attribute.Boolean;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface GeneralMapHotspot extends Struct.ComponentSchema {
  collectionName: 'components_general_map_hotspots';
  info: {
    displayName: 'MapHotspot';
  };
  attributes: {
    category: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    label: Schema.Attribute.String;
    number: Schema.Attribute.Integer;
  };
}

export interface GeneralRichTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_general_rich_text_blocks';
  info: {
    displayName: 'RichText';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
  };
}

export interface GeneralSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_general_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cabin-type.cabin-type': CabinTypeCabinType;
      'destination-section-2.destination-section-2': DestinationSection2DestinationSection2;
      'general.accordion-i-item': GeneralAccordionIItem;
      'general.footer-column': GeneralFooterColumn;
      'general.icon-feature': GeneralIconFeature;
      'general.image-gallery': GeneralImageGallery;
      'general.language-option': GeneralLanguageOption;
      'general.link': GeneralLink;
      'general.locaction-items': GeneralLocactionItems;
      'general.location-items': GeneralLocationItems;
      'general.map-hotspot': GeneralMapHotspot;
      'general.rich-text-block': GeneralRichTextBlock;
      'general.social-link': GeneralSocialLink;
    }
  }
}
