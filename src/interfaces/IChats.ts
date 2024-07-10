export interface IMessage {
    from: string;
    time: string;
    date: string;
    content: string;
  }
  
  export  interface IChat {
    id: string;
    name: string;
    position: string;
    photo: string; // Assuming photo can be empty string or a path
    messages: IMessage[];
  }