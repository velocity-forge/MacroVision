import { Meta, StoryObj } from '@storybook/react';

const data = `
    P R E F O R M A T T E D T E X T
    ! " # $ % & ' ( ) * + , - . /
    0 1 2 3 4 5 6 7 8 9 : ; < = > ?
    @ A B C D E F G H I J K L M N O
    P Q R S T U V W X Y Z [  ] ^ _
    \` a b c d e f g h i j k l m n o
    p q r s t u v w x y z { | } ~
  `;

const meta: Meta = {
  title: 'Global/HTML Elements/Preformatted Text',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const PreformattedText: StoryObj = {
  render: () => {
    return (
      <>
        <pre>{data}</pre>
      </>
    );
  },
};

export default meta;
export { PreformattedText };
