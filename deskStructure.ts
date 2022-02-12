import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { FcMoneyTransfer, FcTemplate } from "react-icons/fc";

const hiddenDocTypes = ["offerCard", "pricingCard"];

export default () =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(
        (document) => !hiddenDocTypes.includes(document.getId()!)
      ),
      orderableDocumentListDeskItem({
        type: "offerCard",
        title: "Offer Cards",
        icon: FcTemplate,
      }),
      orderableDocumentListDeskItem({
        type: "pricingCard",
        title: "Pricing Cards",
        icon: FcMoneyTransfer,
      }),
    ]);
