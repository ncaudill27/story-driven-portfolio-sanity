import S from "@sanity/desk-tool/structure-builder";
import {
  AiOutlineCamera,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineVideoCamera,
} from "react-icons/ai";

const remoteURL = "TODO";
const localURL = "http://localhost:3333";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

const homePage = { type: "homePage", title: "Home Page", icon: AiOutlineHome };
const contactPage = {
  type: "contactPage",
  title: "Contact Page",
  icon: AiOutlineContacts,
};
const analogPage = {
  type: "analogPage",
  title: "Analog Page",
  icon: AiOutlineCamera,
};
const digitalPage = {
  type: "digitalPage",
  title: "Digital Page",
  icon: AiOutlineLaptop,
};
const filmPage = {
  type: "filmPage",
  title: "Film Page",
  icon: AiOutlineVideoCamera,
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
      SingletonListItem(analogPage),
      SingletonListItem(digitalPage),
      SingletonListItem(filmPage),
      S.divider(),
      S.listItem()
        .title("Projects")
        .icon(AiOutlineCamera)
        .schemaType("project")
        .child(S.documentTypeList("project").title("Projects")),
    ]);
