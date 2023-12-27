import { styled } from "nativewind";
import { View } from "../view";
import { SolitoImage } from "solito/image";
import { H1, P } from "../typography";

export interface CardProps {
  header?: string;
  image?: string;
}

export const Card: React.FC<CardProps> = ({ header, image }) => {
  return (
    <View className="m-3 w-full max-w-sm rounded-md bg-white p-3 shadow-md">
      <View className="flex flex-col justify-between">
        <View className="mb-8 items-center">
          <H1 className="flex items-center text-sm text-gray-600">
            Members only
          </H1>
          <SolitoImage
            src="https://plus.unsplash.com/premium_photo-1702226631881-72d0d0bfa05e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={200}
            width={300}
            alt="A cool artist's image."
          />
          <View className="mb-2 text-xl font-bold text-gray-900">
            <P>Can coffee make you a better developer?</P>
          </View>
          <P className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </P>
        </View>
        <View className="flex items-center">
          <View className="text-sm">
            <P className="leading-none text-gray-900">Jonathan Reinink</P>
            <P className="text-gray-600">Aug 18</P>
          </View>
        </View>
      </View>
    </View>
  );
};
