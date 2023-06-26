import FullList from "./model/FullList.js";
import ListItem from "./model/ListItem.js";
import ListTemplate from "./templates/ListTemplate.js";

const initApp = () => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const itemEntryForm = document.getElementById('itemEntryForm');
  itemEntryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('newItem');
    const newEntryText = input.value.trim();
    if (!newEntryText.length)
      return;
    const itemId = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;
    const newItem = new ListItem(itemId.toString(), newEntryText);
    fullList.addItem(newItem);
    template.render(fullList);
  });

  const clearItems = document.getElementById('clearItemsButton');
  clearItems.addEventListener('click', () => {
    fullList.clearList();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
};

document.addEventListener('DOMContentLoaded', initApp);