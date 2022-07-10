import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import appendOwnerState from './appendOwnerState';
import mergeSlotProps from './mergeSlotProps';
import resolveComponentProps from './resolveComponentProps';

/**
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
export default function useSlotProps(parameters) {
  var _parameters$additiona;

  var elementType = parameters.elementType,
      externalSlotProps = parameters.externalSlotProps,
      ownerState = parameters.ownerState,
      rest = _objectWithoutProperties(parameters, ["elementType", "externalSlotProps", "ownerState"]);

  var resolvedComponentsProps = resolveComponentProps(externalSlotProps, ownerState);
  var merged = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  var props = appendOwnerState(elementType, _extends({}, merged.props, {
    ref: useForkRef(merged.internalRef, useForkRef(resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref))
  }), ownerState);
  return props;
}