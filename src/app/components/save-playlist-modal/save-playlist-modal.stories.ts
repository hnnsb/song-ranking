import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {TrackEntry} from "../../models/track-entry";
import {TRACK} from "../../../stories/data/track";
import {SavePlaylistModalComponent} from "./save-playlist-modal.component";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

const meta: Meta<SavePlaylistModalComponent> = {
  title: "modals/Save Playlist",
  component: SavePlaylistModalComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [NgbActiveModal]
    }),
  ]
}

export default meta;
type Story = StoryObj<SavePlaylistModalComponent>;


const trackEntries: TrackEntry[] = [
  {elo: 1200, track: TRACK, matches: 0},
  {elo: 1400, track: TRACK, matches: 0},
  {elo: 1300, track: TRACK, matches: 0},
];

for (let i = 0; i < 20; i++) {
  trackEntries.push({elo: 1200, track: TRACK, matches: 0})
}

export const Default: Story = {
  args: {}
}


