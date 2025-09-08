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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cabin-type.cabin-type': CabinTypeCabinType;
      'destination-section-2.destination-section-2': DestinationSection2DestinationSection2;
    }
  }
}
