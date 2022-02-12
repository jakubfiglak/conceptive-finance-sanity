import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export default () =>
  S.list()
    .title("Content")
    .items([
      // Minimum required configuration
      orderableDocumentListDeskItem({ type: "offerCard" }),
      orderableDocumentListDeskItem({ type: "pricingCard" }),
      // S.listItem()
      //   .title("Settings")
      //   .child(
      //     S.document().schemaType("siteSettings").documentId("siteSettings")
      //   ),
      ...S.documentTypeListItems(),
    ]);
