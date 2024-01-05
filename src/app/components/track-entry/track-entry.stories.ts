import {argsToTemplate, Meta, StoryObj} from "@storybook/angular";
import {TrackEntryComponent} from "./track-entry.component";
import {TRACK} from "../../../stories/data/track";

const meta: Meta<TrackEntryComponent> = {
  title: "Track Entry",
  component: TrackEntryComponent,
  tags: ["autodocs"],
  render: (args: TrackEntryComponent) => ({
    props: {
      ...args,
    },
    template: `<app-track-entry ${argsToTemplate(args)}></app-track-entry>`,
  }),
  argTypes: {
    size: {
      control: 'number',
    },
  },
}

export default meta;
type Story = StoryObj<TrackEntryComponent>;


export const Default: Story = {
  args: {
    track: TRACK
  }
}


