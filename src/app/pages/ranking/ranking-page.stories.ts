import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {RankingPageComponent} from "./ranking-page.component";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {PlaylistService} from "../../services/playlist/playlist.service";
import {MockPlaylistService} from "../../../stories/mock-services/mock-playlist-service";
import {UserService} from "../../services/user/user.service";


const meta: Meta<RankingPageComponent> = {
  title: "pages/Ranking Page",
  component: RankingPageComponent,
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
        {provide: PlaylistService, useClass: MockPlaylistService},
        UserService
      ]
    }),
  ],
}

export default meta;
type Story = StoryObj<RankingPageComponent>;

export const Default: Story = {
  args: {}
}


