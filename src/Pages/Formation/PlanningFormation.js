import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { listeplanningformation } from "../../api/api";
import "../../css/ListeEmployes.css";
import "../../css/icon.css";
import "../../css/ListeEmployes.css";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { DataGrid } from "@material-ui/data-grid";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import Controls from "../../components/controls/Controls";
import useTable from "../../components/useTable";
import { InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

export default function PlanningFormation() {
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [records, setRecords] = useState();

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.nom.toLowerCase().includes(target.value)
          );
      },
    });
  };
  const columns = [
    { field: "nomformation", headerName: "Nom formation", width: 170 },
    { field: "dateformation", headerName: "Date formation", width: 170 },
    { field: "lieuxformation", headerName: "Lieux formation", width: 170 },
    { field: "dureeformation", headerName: "Duree formation", width: 170 },
    { field: "nomformateur", headerName: "Nom formateur", width: 170 },
  ];
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, columns, filterFn);

  const useStyles = makeStyles((theme) => ({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
    root: {
      "& .super-app.yellow": {
        color: "#ff8e05",
        fontWeight: "600",
      },
      "& .super-app.red": {
        color: "#0CF916",
        fontWeight: "600",
      },
      "& .super-app.green": {
        color: "#FE0325",
        fontWeight: "600",
      },
      width: "100%",
      marginTop: "50px",
    },
    container: {
      maxHeight: 440,
    },
    newButton: {
      position: "absolute",
      right: "20px",
    },
    searchInput: {
      width: "75%",
    },
  }));
  const history = useHistory();
  const classes = useStyles();

  const [plannings, setPlannings] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);
  const pageSize = 8;

  useEffect(() => {
      console.log('heyyyy')
    fetchPlannings();
  }, []);

  const fetchPlannings = async () => {
    const res = await listeplanningformation();
    console.log("les promotion sont::: ", res);
    setPlannings(res);
    setFetchComplete(true);
  };

  return (
    <view>
      <PageHeader
        title="Planning des formations"
        subTitle="pour le personnel de l'entreprise"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Controls.Input
        label="Search employe"
        className={classes.searchInput}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={handleSearch}
      />

      <Controls.Button
        text="Ajouter un planning"
        variant="outlined"
        startIcon={<AddIcon />}
        className={classes.newButton}
        onClick={() => {
          history.push("/AjouterPlanning");
        }}
        // onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
      />
      <br></br>
      <Paper className={classes.root}>
        <div style={{ height: 130 + pageSize * 53, width: "100%" }}>
          {
            plannings &&
            <DataGrid rows={plannings.map((emp, index) => ({ ...emp, id: index }))} columns={columns} pageSize={pageSize} />
          }
        </div>
        {fetchComplete && plannings.length < 1 && (
          <div>
            <p>Aucun employé, pour ajouter cliquez sur le bouton ajouter</p>
          </div>
        )}
      </Paper>
    </view>
  );
}
