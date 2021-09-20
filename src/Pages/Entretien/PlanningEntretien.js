import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { listeplanningentretien, listeplanningformation } from "../../api/api";
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
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
export default function PlanningEntretien() {
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
    { field: "nomcandidat", headerName: "Nom candidat", width: 170 },
    { field: "prenomcandidat", headerName: "Prenom candidat", width: 170 },
    { field: "dateentretien", headerName: "Date entretien", width: 170 },
    { field: "salleentretien", headerName: "Salle entretien", width: 170 },
    { field: "nommemebrerh", headerName: "Nom RH", width: 170 },
    { field: "nommemebremetier", headerName: "Nom Metier", width: 170 },
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
    const res = await listeplanningentretien();
    console.log("les promotion sont::: ", res);
    setPlannings(res);
    setFetchComplete(true);
  };

  return (
    <view>
      <PageHeader
        title="Planning des entretiens"
        subTitle="pour les candidats selectionés"
        icon={<CalendarTodayIcon fontSize="large" />}
      />
      <Controls.Input
        label="Search"
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
          history.push("/AjouterEntretien");
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
