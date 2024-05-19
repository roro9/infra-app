import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RoutePath } from "../../constants";
import { useAppState } from "../../hooks/reduxStateHooks";
import { updateAppId } from "../../redux/slices/appIdSlice";

export function ApplicationSelector() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const options = useAppState((s) => s.applications);

  React.useEffect(() => {
    if (id) {
      const numericId = Number(id);
      const validId = options.some((o) => o.id === numericId);
      if (validId) {
        dispatch(updateAppId(Number(id)));
      } else {
        navigate(RoutePath.APPLICATIONS);
      }
    }
  }, [id]);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={id ?? ""}
          label="Age"
          onChange={(e) => {
            if (e.target.value !== id) {
              navigate(`${RoutePath.APPLICATIONS}/${e.target.value}`);
            }
          }}
        >
          <MenuItem value="" style={{ display: "none" }} />

          {options.map((o) => (
            <MenuItem key={o.id} value={String(o.id)}>
              {o.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
