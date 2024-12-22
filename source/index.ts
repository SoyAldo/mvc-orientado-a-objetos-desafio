import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  const args = require("minimist")(argv.slice(2));
  console.log(args);
  
  return {
    action: null,
    params: null,
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv);
  const action = params.action;
  const argument = params.params;

  if (action === "get") {
    console.log(controller.processOptions({ action: "get", params: argument }));
  } else if (action === "save") {
    console.log(controller.processOptions({ action: "save", params: argument }));
  } else {
    console.log(controller.processOptions({ action: "get", params: argument }));
  }
}

main();
