namespace AllMessage {
  namespace Message {
    export function returnMessage(name: string){
      console.log(`${name}`);
    }
  }
  namespace MessageWithLenght {
    export function returnMessage(name: string){
      const messageLenght = getLenght(name);
      console.log(`${messageLenght}.`);
    }
    function getLenght(name: string):number {
      return name.length;
    }
  }
}

AllMessage.Message.returnMessage('Hola');
AllMessage.MessageWithLenght.returnMessage('Hola');