import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { CategoryListOrganisms } from 'pages /CategoryList/ui/organisms/CategoryListOrganisms';

const Meta: ComponentMeta<typeof CategoryListOrganisms> = {
  title: 'ui/organisms/CategoryListOrganisms',
  component: CategoryListOrganisms,
  args: {
    input: '3243',
    refetch() {
        
    },
    goToCategoryItem(id) {        
    },
    isFetching: false,
    services: [
      {
        "service_id": "11",
        "service_name": "МТС",
        "service_icon": "https://github.com/kode-frontend/files/raw/main/MTS.png"
      },
      {
        "service_id": "12",
        "service_name": "МегаФон",
        "service_icon": "https://github.com/kode-frontend/files/raw/main/megafon.png"
      },
      {
        "service_id": "13",
        "service_name": "Beeline",
        "service_icon": "https://github.com/kode-frontend/files/raw/main/beeline.png"
      },
      {
        "service_id": "14",
        "service_name": "Tele2",
        "service_icon": "https://github.com/kode-frontend/files/raw/main/tele2.png"
      },
      {
        "service_id": "15",
        "service_name": "Kode Mobile",
        "service_icon": "https://github.com/kode-frontend/files/raw/main/kode.png"
      }
    ]
  },
}

export default Meta

type TCategoryListOrganismsStory = ComponentStory<typeof CategoryListOrganisms>

export const _CategoryListOrganisms: TCategoryListOrganismsStory = args => <CategoryListOrganisms {...args} />