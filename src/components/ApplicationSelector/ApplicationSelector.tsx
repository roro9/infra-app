import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RoutePath } from "../../constants";
import { useAppState } from "../../hooks/reduxStateHooks";
import { updateAppId } from "../../redux/slices/appIdSlice";
import { LabelWrapper } from "../LabelWrapper";
import cx from "classnames";
import { CaretDownIcon } from "../../icons";

export function ApplicationSelector() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const options = useAppState((s) => s.applications);

  // Sync application id in redux  statewith id in url
  // If not a valid id, navigate to /applications and clear redux state
  React.useEffect(() => {
    if (id) {
      const numericId = Number(id);
      const validId = options.some((o) => o.id === numericId);
      if (validId) {
        dispatch(updateAppId(Number(id)));
      } else {
        navigate(RoutePath.APPLICATIONS);
      }
    } else {
      dispatch(updateAppId(null));
    }
  }, [id, dispatch, navigate, options]);

  // auto select first app when no id in url
  React.useEffect(() => {
    if (options.length && !id) {
      navigate(`${RoutePath.APPLICATIONS}/${options[0].id}`);
    }
  }, [options, id, navigate]);

  return (
    <LabelWrapper label="Applications">
      <Select
        className={cx("min-w-[125px]", "[&>div]:pb-0", {
          "!text-black/30": id === undefined,
        })}
        size="small"
        variant="standard"
        disableUnderline
        displayEmpty
        IconComponent={(props) => (
          <span {...props}>
            <CaretDownIcon />
          </span>
        )}
        placeholder="Select Option"
        value={id ?? ""}
        label="Age"
        onChange={(e) => {
          if (e.target.value !== id) {
            navigate(`${RoutePath.APPLICATIONS}/${e.target.value}`);
          }
        }}
      >
        <MenuItem value="" style={{ display: "none" }}>
          Select an application
        </MenuItem>

        {options.map((o) => (
          <MenuItem key={o.id} value={String(o.id)}>
            {o.name}
          </MenuItem>
        ))}
      </Select>
    </LabelWrapper>
  );
}
