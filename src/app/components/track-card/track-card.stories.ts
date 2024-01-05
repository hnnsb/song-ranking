import {TrackCardComponent} from "./track-card.component";
import {argsToTemplate, Meta, StoryObj} from "@storybook/angular";
import {TRACK} from "../../../stories/data/track";

const meta: Meta<TrackCardComponent> = {
  title: "Track Card",
  component: TrackCardComponent,
  tags: ["autodocs"],
  render: (args: TrackCardComponent) => ({
    props: {
      ...args,
    },
    template: `<app-track-card ${argsToTemplate(args)}></app-track-card>`,
  }),
}

export default meta;
type Story = StoryObj<TrackCardComponent>;


export const Default: Story = {
  args: {
    track: TRACK
  }
}


