import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {PlaylistSortingPageComponent} from "./playlist-sorting-page.component";
import {PlaylistService} from "../../services/playlist/playlist.service";
import {MockPlaylistService} from "../../../stories/mock-services/mock-playlist-service";


const meta: Meta<PlaylistSortingPageComponent> = {
  title: "pages/Sorting Page",
  component: PlaylistSortingPageComponent,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        HttpClientModule,
      ],
      providers: [
        {provide: PlaylistService, useClass: MockPlaylistService}
      ]
    }),
  ],
}

export default meta;
type Story = StoryObj<PlaylistSortingPageComponent>;

export const Default: Story = {
  args: {}
}


