import {argsToTemplate, Meta, StoryObj} from "@storybook/angular";
import {RankingComponent} from "./ranking.component";
import {TrackEntry} from "../../models/track-entry";
import {TRACK} from "../../../stories/data/track";

const meta: Meta<RankingComponent> = {
  title: "Components/Ranking",
  component: RankingComponent,
  tags: ["autodocs"],
  render: (args: RankingComponent) => ({
    props: {
      ...args,
    },
    template: `<app-ranking ${argsToTemplate(args)}></app-ranking>`,
  }),
}

export default meta;
type Story = StoryObj<RankingComponent>;


const trackEntries: TrackEntry[] = [
  {elo: 1200, track: TRACK, matches: 0},
  {elo: 1400, track: TRACK, matches: 0},
  {elo: 1300, track: TRACK, matches: 0},
];

for (let i = 0; i < 20; i++) {
  trackEntries.push({elo: 1200, track: TRACK, matches: 0})
}

export const Default: Story = {
  args: {
    trackEntries,
    maxHeight: 300
  }
}


