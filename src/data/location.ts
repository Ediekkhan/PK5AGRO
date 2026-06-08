export interface ILocation {
    displayAddress: string;
    actualAddress: string;
    type?: string;
}

export const locations: ILocation[] = [
    {
        displayAddress:
            "5901 Peachtree Dunwoody Road, Suite A310, Atlanta, GA 30328, USA",
        actualAddress: "5901 Peachtree Dunwoody Rd, Atlanta, GA 30328, USA",
        type: "USA Office",
    },
    {
        displayAddress:
            "2/4, Nza Street, Independence Layout Enugu, Enugu State, Nigeria",
        actualAddress:
            "2/4, Nza Street, Independence Layout Enugu, Enugu State, Nigeria",
        type: "Enugu, Nigeria Office",
    },
    // {
    //     displayAddress: "No. 5B, Ikosi Road, Oregun, Ikeja, Lagos, Nigeria",
    //     actualAddress: "No. 5B, Ikosi Road, Oregun, Ikeja, Lagos, Nigeria",
    //     type: "Lagos, Nigeria Office",
    // },

];

