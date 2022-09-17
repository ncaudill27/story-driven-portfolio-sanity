import S from "@sanity/desk-tool/structure-builder";
import {
  AiOutlineCamera,
  AiOutlineContacts,
  AiOutlineHome,
} from "react-icons/ai";

const remoteURL = "https://brett-davis-sanity.netlify.app";
const localURL = "http://localhost:3333";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

const homePage = { type: "homePage", title: "Home Page", icon: AiOutlineHome };
const contactPage = {
  type: "contactPage",
  title: "Contact Page",
  icon: AiOutlineContacts,
};

function SingletonListItem({ type, title, icon }) {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(S.editor().id(type).schemaType(type).documentId(type));
}

export default () =>
  S.list()
    .title("Content")
    .items([
      SingletonListItem(homePage),
      SingletonListItem(contactPage),
      S.divider(),
      S.listItem()
        .title("Projects")
        .icon(AiOutlineCamera)
        .schemaType("project")
        .child(S.documentTypeList("project").title("Projects")),
    ]);
