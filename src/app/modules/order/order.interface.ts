type OrderedBook = {
     bookId: string;
     quantity: number;
}

export type OrderPayload = {
     orderedBooks: OrderedBook[];
}