import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {CategoryDeleteModal} from "./category-delete-modal.component";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

const meta: Meta<CategoryDeleteModal> = {
  title: "modals/Delete Category",
  component: CategoryDeleteModal,
  tags: ["autodocs"],
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [NgbActiveModal]
    }),
  ]
}

export default meta;
type Story = StoryObj<CategoryDeleteModal>;

export const Default: Story = {
  args: {
    categoryName: "Test Category"
  }
}


