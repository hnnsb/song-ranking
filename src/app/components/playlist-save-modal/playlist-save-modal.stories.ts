import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {PlaylistSaveModalComponent} from "./playlist-save-modal.component";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

const meta: Meta<PlaylistSaveModalComponent> = {
  title: "modals/Save Playlist",
  component: PlaylistSaveModalComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [NgbActiveModal]
    }),
  ]
}

export default meta;
type Story = StoryObj<PlaylistSaveModalComponent>;

export const Default: Story = {
  args: {}
}


