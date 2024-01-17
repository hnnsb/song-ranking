import {argsToTemplate, Meta, StoryObj} from "@storybook/angular";
import {TRACK} from "../../../stories/data/track";
import {CategoryContainerComponent} from "./category-container.component";
import {Track} from "../../models/Spotify/track";

const meta: Meta<CategoryContainerComponent> = {
  title: "Components/Category Container",
  component: CategoryContainerComponent,
  tags: ["autodocs"],
  render: (args: CategoryContainerComponent) => ({
    props: {
      ...args,
    },
    template: `<app-category-container ${argsToTemplate(args)}></app-category-container>`,
  }),
}

export default meta;
type Story = StoryObj<CategoryContainerComponent>;

const tracks: Track[] = [
  TRACK,
  TRACK,
  TRACK
];

export const Default: Story = {
  args: {
    tracks,
  }
}


