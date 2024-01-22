import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {CategorySaveModal} from "./category-save-modal.component";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

const meta: Meta<CategorySaveModal> = {
  title: "modals/Save Category",
  component: CategorySaveModal,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [NgbActiveModal]
    }),
  ]
}

export default meta;
type Story = StoryObj<CategorySaveModal>;

export const Default: Story = {
  args: {}
}


