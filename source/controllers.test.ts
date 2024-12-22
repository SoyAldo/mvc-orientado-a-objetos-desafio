import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const contacts = new ContactsController();
  Contact contact = contacts.processOptions({ action: "get", params: { id: 1 } });
  t.truthy(true);
});

test("Testeo el método processOptions", (t) => {
  const ContactsControllerInstance = new ContactsController();

});
