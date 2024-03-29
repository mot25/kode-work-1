/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));

const getStories = () => {
  return [
    require("../src/entities/CategoryItem/ui/molecules/CategoryItemMolecules/CategoryItemMolecules.stories.tsx"),
    require("../src/entities/ServicesItem/ui/molecules/ServiceItemMolecules/ServiceItemMolecules.stories.tsx"),
    require("../src/entities/Skeleton/ui/atom/SkeletonListItem/SkeletonListItem.stories.tsx"),
    require("../src/entities/Skeleton/ui/organisms/Skeleton/Skeleton.stories.tsx"),
    require("../src/features/CustomKeyboard/ui/atom/CellKeyboardWithIcon/CellKeyboardWithIcon.stories.tsx"),
    require("../src/features/CustomKeyboard/ui/atom/CellKeyboardWithNum/CellKeyboardWithNum.stories.tsx"),
    require("../src/features/CustomKeyboard/ui/atom/CellKeyboardWithText/CellKeyboardWithText.stories.tsx"),
    require("../src/features/CustomKeyboard/ui/organisms/CustomKeyboard/CustomKeyboard.stories.tsx"),
    require("../src/features/InputCardNumber/ui/molecules/InputCardNumberServicesItem/InputCardNumberServicesItem.stories.tsx"),
    require("../src/features/MyALertProvider/ui/molecules/ItemAlert/ItemAlert.stories.tsx"),
    require("../src/features/SelectCardItem/ui/organisms/SelectCardItemOrganisms/SelectCardItemOrganisms.stories.tsx"),
    require("../src/features/SumCardItem/ui/atom/ProcentAtom/ProcentAtom.stories.tsx"),
    require("../src/features/SumCardItem/ui/molecules/SumCardItemInputWrapper/SumCardItemInputWrapper.stories.tsx"),
    require("../src/features/SumCardItem/ui/organisms/ChipsOrganisms/ChipsOrganisms.stories.tsx"),
    require("../src/features/SumCardItem/ui/templates/SumCardItemTempaltes/SumCardItemTempaltes.stories.tsx"),
    require("../src/pages/AuthNumber/ui/atom/LoaderAuthNumber/LoaderAuthNumber.stories.tsx"),
    require("../src/pages/AuthNumber/ui/molecules/InputAuthNumber/InputAuthNumber.stories.tsx"),
    require("../src/pages/CategoryList/ui/atom/SearchAtomCategoryList/SearchAtomCategoryList.stories.tsx"),
    require("../src/pages/CategoryList/ui/organisms/CategoryListOrganisms/CategoryListOrganisms.stories.tsx"),
    require("../src/pages/CodeAcces/ui/atom/CellAcces/CellAcces.stories.tsx"),
    require("../src/pages/CodeAcces/ui/molecules/CodeCells/CodeCells.stories.tsx"),
    require("../src/pages/CodeAcces/ui/molecules/PageLoader/PageLoader.stories.tsx"),
    require("../src/pages/CodeAcces/ui/organisms/CodeCellsWithTitle/CodeCellsWithTitle.stories.tsx"),
    require("../src/pages/PaymentsMain/ui/atom/PaymentsMainHeader/PaymentsMainHeader.stories.tsx"),
    require("../src/pages/PaymentsMain/ui/organisms/PaymentsMainOrganisms/PaymentsMainOrganisms.stories.tsx"),
    require("../src/pages/TechnicalPage/ui/molecules/MediumTechnicalPage/MediumTechnicalPage.stories.tsx"),
    require("../src/pages/TechnicalPage/ui/TechnicalPage.stories.tsx"),
    require("../src/shared/ui/core/Typography/Typography.stories.tsx"),
    require("../src/shared/ui/CTouchableOpacity/CTouchableOpacity.stories.tsx"),
    require("../src/shared/ui/EmpetyList/EmpetyList.stories.tsx"),
    require("../src/shared/ui/HeaderBackButton/HeaderBackButton.stories.tsx"),
    require("../src/shared/ui/HeaderTitleForBlock/ui/HeaderTitleForBlock.stories.tsx"),
    require("../src/shared/ui/Input/Input.stories.tsx"),
    require("../src/shared/ui/InputWithPassword/ui/InputWithPassword.stories.tsx"),
    require("../src/shared/ui/SimpleButton/ui/atom/SimpleButton.stories.tsx"),
    require("../src/shared/ui/StubName/ui/StubName.stories.tsx"),
    require("../src/shared/ui/TopLogoAnimated/TopLogoAnimated.stories.tsx"),
  ];
};

configure(getStories, module, false);
