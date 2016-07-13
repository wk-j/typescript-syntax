function sendMessage(recipients: string | string[], body: string) {
    if(typeof recipients === "string") {
        recipients = recipients.split(",");
    }

    recipients = recipients.filter(x => x == "a");
    for(let r of recipients) {

    }
}

class Item {
    id: number
}


function test() {
    let bestItem: Item;
    let items: Item[] = [ { id: 100 }];

    for (let item of items) {
        if(item!.id === 42) bestItem = item!;
    }

    //let itemName = bestItem!.name;
    //let itemName = bestItem.name;
}
