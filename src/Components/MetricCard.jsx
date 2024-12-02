import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const MetricCard = ({ title, value, growth }) => {
  return (
    <Card sx={{ width: "200px", textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {growth}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
