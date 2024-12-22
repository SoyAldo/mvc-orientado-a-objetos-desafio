// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
const jsonfile = require('jsonfile')

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data = new Array<Contact>();

  load() {
    this.data = jsonfile.readFileSync("./contacts.json");
  }

  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }

  getAll() {
    return this.data;
  }

  addOne(contact: Contact) {
    this.data.push(contact);
  }

  getOneById(id: number) {
    return this.data.find((contact) => contact.id === id);
  }

}

export { ContactsCollection };
