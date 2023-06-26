import FullList from "./model/FullList";
import ListItems from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const intiApp = (): void => {
    const fullList = FullList.instance;
    const template = ListTemplate.instance;

    const itemEnteryForm = document.getElementById('itemEntryForm') as HTMLFormElement;
    itemEnteryForm.addEventListener('submit', (event: SubmitEvent) => {
        event.preventDefault();

        const input = document.getElementById('newItem') as HTMLInputElement;
        const newEntryText: string = input.value.trim();
        if(!newEntryText.length) return;

        const itemId: number = fullList.list.length
        ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
        : 1;

        const newItem = new ListItems(itemId.toString(), newEntryText);
        fullList.addItem(newItem);
        template.render(fullList);
    })

    const clearItems = document.getElementById('clearItemsButton') as HTMLButtonElement;

    clearItems.addEventListener('click', (): void => {
        fullList.clearList();
        template.clear();
    })

    fullList.load();
    template.render(fullList);
}

document.addEventListener('DOMContentLoaded', intiApp);