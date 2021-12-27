import { Box, Typography, Fade, Slider } from "@mui/material";
import { formatDuration, formatPosition } from "../helpers";

function ProgressBar({ position, duration, fadeProgressBar }) {
  return (
    <Fade in={fadeProgressBar} timeout={{ enter: 1800 }}>
      <Box>
        <Slider sx={{ mt: -10 }} aria-label="time-indicator" size="small" value={position} min={0} max={duration} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
          }}
        >
          <Typography sx={{ fontSize: "0.75rem", opacity: 0.38, fontWeight: 500, letterSpacing: 0.2 }}>
            {formatPosition(position)}
          </Typography>
          <Typography sx={{ fontSize: "0.75rem", opacity: 0.38, fontWeight: 500, letterSpacing: 0.2 }}>
            {formatDuration(duration)}
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
}

export default ProgressBar;
