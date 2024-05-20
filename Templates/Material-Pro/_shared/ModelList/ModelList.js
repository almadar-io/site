import React from "react";
//Routing
import { Route } from "react-router-dom";
import { styles } from "./ModelList.styles";
import { withStyles } from "@material-ui/styles";
//infinite scroller
import infiniteScroll from "react-infinite-scroller";
import Loading from "Templates/_shared/Loading/Loading";
import Empty from "Templates/_shared/Empty/Empty";
// import theme from "Theme";

//recompose
import { withState, compose, lifecycle } from "recompose";
//Different template pages
import ModelAdd from "Templates/_shared/ModelAdd/ModelAdd";
import ModelEdit from "Templates/_shared/ModelEdit/ModelEdit";
import ModelPreview from "Templates/_shared/ModelPreview/ModelPreview";
import ModelListItems from "Templates/_shared/ModelList/ModelListItems";
//shared components
import FloatingAddButton from "Templates/_shared/FloatingAddButton/FloatingAddButton";
import ClientNotification from "Templates/_shared/ClientNotification/ClientNotification";
import Autocomplete from "Templates/_shared/Autocomplete/Autocomplete";
import Table from "Templates/_shared/Table/Table";
import {
  Paper,
  AppBar,
  Toolbar,
  Grid,
  TablePagination,
  Fade
} from "@material-ui/core";

const enhance = compose(
  withState("viewOption", "setViewOption", 0),
  withState("page", "setPage", 1),
  withState("rowsPerPage", "setRowsPerPage", 10),
  lifecycle({
    componentDidMount() {
      this.props.setPage(0);
    }
  })
);

const style = {};

const ModelList = enhance(
  ({
    modelArray,
    modelSchema,
    columns,
    createModel,
    modelName,
    updateModel,
    deleteModel,
    searchModel,
    uploadMedia,
    loading,
    gallery,
    uploadGallery,
    addToGallery,
    removeFromGallery,
    addToMedia,
    removeFromMedia,
    deleteMedia,
    media,
    match,
    history,
    classes,
    form,
    notifications,
    saveNotification,
    removeNotification,
    ModelListPage,
    ModelEditPage,
    ModelAddPage,
    ModelPreviewPage,
    modelKey,
    columnNumber,
    xs,
    sm,
    md,
    lg,
    xl,
    onSearch,
    onSearchSelect,
    viewOption,
    setViewOption,
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage,
    ModelListActions,
    ModelListItemComponent,
    noPagination,
    onAdd,
    onDelete,
    onEdit,
    onCreate,
    onView,
    defaultView,
    gridSizes,
    ...rest
  }) => {
    const onEditWrapper = model => {
      if (onEdit) {
        return onEdit(model);
      }
      history.push(`${match.path}/edit/${model._id}`);
    };
    const onDeleteWrapper = model => {
      if (onDelete) {
        return onDelete(model);
      }
      history.push(`${match.path}/${modelName}`);
    };
    const onAddWrapper = () => {
      if (onAdd) {
        return onAdd();
      }
      history.push(`${match.path}/add`);
    };
    const onCreateWrapper = model => {
      if (onCreate) {
        return onCreate(model);
      }
      onViewWrapper(model);
    };
    const onViewWrapper = model => {
      if (onView) {
        return onView(model);
      }
      history.push(`${match.path}/view/${model._id}`);
    };
    const Actions = {
      onEdit: onEditWrapper,
      onDelete: onDeleteWrapper,
      onCreate: onCreateWrapper,
      onView: onViewWrapper,
      onAdd: onAddWrapper
    };
    let models =
      modelArray &&
      (!noPagination
        ? modelArray.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : modelArray);
    return (
      <>
        <Route
          exact
          path={`${match.path}/add`}
          render={({ match }) => {
            return ModelAddPage ? (
              <Grid container justify="center">
                <Grid item xs={12}>
                  <ModelAddPage
                    model={{}}
                    form={form}
                    modelSchema={modelSchema}
                    onSave={values => {
                      createModel(values).then(res => {
                        onCreateWrapper(res);
                      });
                    }}
                    onCancel={() => {
                      history.goBack();
                    }}
                    modelName={modelName}
                    {...rest}
                  />
                </Grid>
              </Grid>
            ) : (
              <Fade timeout={1000} in={!loading}>
                <Grid container justify="center">
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <ModelAdd
                      model={{}}
                      form={form}
                      modelSchema={modelSchema}
                      onSave={values => {
                        createModel(values).then(res => {
                          onCreateWrapper(res);
                        });
                      }}
                      onCancel={() => {
                        history.goBack();
                      }}
                      modelName={modelName}
                      {...rest}
                    />
                  </Grid>
                </Grid>
              </Fade>
            );
          }}
        />
        <Route
          path={`${match.path}/edit/:id`}
          render={({ match }) => {
            return ModelEditPage ? (
              <Grid container justify="center">
                <Grid xs={12}>
                  <ModelEditPage
                    modelName={modelName}
                    onCancel={() => {
                      history.goBack();
                    }}
                    onSave={(updatedModel, values) => {
                      updateModel(updatedModel, values);
                    }}
                    form={form}
                    modelSchema={modelSchema}
                    model={
                      modelArray &&
                      modelArray.length > 0 &&
                      modelArray.find(({ _id }) => _id === match.params.id)
                    }
                    media={media}
                    gallery={
                      gallery &&
                      gallery.length > 0 &&
                      gallery.filter(
                        ({ modelId }) => modelId === match.params.id
                      )
                    }
                    uploadMedia={uploadMedia}
                    uploadGallery={uploadGallery}
                    addToGallery={addToGallery}
                    removeFromGallery={removeFromGallery}
                    addToMedia={addToMedia}
                    deleteMedia={deleteMedia}
                    removeFromMedia={removeFromMedia}
                    onMediaUploadComplete={(model, media) => {
                      updateModel(model, {
                        image: `${media}&q=${Date.now()}`
                      });
                    }}
                    onGalleryUploadComplete={(model, media) => {
                      updateModel(model, {
                        gallery: [...model.gallery, ...media]
                      });
                    }}
                    onMediaDeleteComplete={(model, media) => {
                      updateModel(model, { image: `` });
                    }}
                    onGalleryDeleteComplete={(model, index) => {
                      model.gallery.remove(index);
                      updateModel(model, { gallery: model.gallery });
                    }}
                    match={match}
                    deleteModel={deleteModel}
                    {...rest}
                  />
                </Grid>
              </Grid>
            ) : (
              <Fade timeout={1000} in={!loading}>
                <Grid container justify="center">
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <ModelEdit
                      modelName={modelName}
                      onCancel={() => {
                        history.goBack();
                      }}
                      onSave={(updatedModel, values) => {
                        updateModel(updatedModel, values);
                      }}
                      form={form}
                      modelSchema={modelSchema}
                      model={
                        modelArray &&
                        modelArray.length > 0 &&
                        modelArray.find(({ _id }) => _id === match.params.id)
                      }
                      media={media}
                      gallery={
                        gallery &&
                        gallery.length > 0 &&
                        gallery.filter(
                          ({ modelId }) => modelId === match.params.id
                        )
                      }
                      uploadMedia={uploadMedia}
                      uploadGallery={uploadGallery}
                      addToGallery={addToGallery}
                      removeFromGallery={removeFromGallery}
                      addToMedia={addToMedia}
                      deleteMedia={deleteMedia}
                      removeFromMedia={removeFromMedia}
                      onMediaUploadComplete={(model, media) => {
                        updateModel(model, {
                          image: `${media}&q=${Date.now()}`
                        });
                      }}
                      onGalleryUploadComplete={(model, media) => {
                        updateModel(model, {
                          gallery: [...model.gallery, ...media]
                        });
                      }}
                      onMediaDeleteComplete={(model, media) => {
                        updateModel(model, { image: `` });
                      }}
                      onGalleryDeleteComplete={(model, index) => {
                        model.gallery.remove(index);
                        updateModel(model, { gallery: model.gallery });
                      }}
                      {...rest}
                    />
                    <FloatingAddButton onClick={onAddWrapper} />
                  </Grid>
                </Grid>
              </Fade>
            );
          }}
        />
        <Route
          path={`${match.path}/view/:id`}
          render={({ match }) => {
            return ModelPreviewPage ? (
              <Fade timeout={1000} in={!loading}>
                <Grid container>
                  <Grid item xs={12}>
                    <ModelPreviewPage
                      modelName={modelName}
                      onEdit={onEditWrapper}
                      onDelete={onDeleteWrapper}
                      deleteModel={deleteModel}
                      updateModel={updateModel}
                      searchModel={searchModel}
                      form={form}
                      model={
                        modelArray &&
                        modelArray.length > 0 &&
                        modelArray.find(({ _id }) => _id === match.params.id)
                      }
                      classes={classes}
                      match={match}
                      location={location}
                      history={history}
                      {...rest}
                    />
                  </Grid>
                </Grid>
              </Fade>
            ) : (
              <Fade timeout={1000} in={!loading}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <ModelPreview
                      modelName={modelName}
                      onEdit={onEditWrapper}
                      onDelete={onDeleteWrapper}
                      deleteModel={deleteModel}
                      updateModel={updateModel}
                      searchModel={searchModel}
                      form={form}
                      classes={classes}
                      model={
                        modelArray &&
                        modelArray.length > 0 &&
                        modelArray.find(({ _id }) => _id === match.params.id)
                      }
                      {...rest}
                    />
                    <FloatingAddButton onClick={onAddWrapper} />
                  </Grid>
                </Grid>
              </Fade>
            );
          }}
        />
        <Route
          exact
          path={`${match.path}`}
          render={props => {
            return (
              <React.Fragment>
                <AppBar
                  className={classes.autocompleteContainer}
                  position="static"
                  color="default"
                >
                  <Toolbar>
                    <Autocomplete
                      inputClassName={classes.autocomplete}
                      placeholder={"Search…"}
                      onSelect={suggestion => {
                        onSearchSelect
                          ? onSearchSelect(suggestion)
                          : history.push(
                              `/${suggestion.resource}/view/${suggestion._id}`
                            );
                      }}
                      loadSuggestions={text => {
                        let query = {
                          [modelKey]: { $regex: event.target.value }
                        };
                        if (onSearch) {
                          return onSearch(query);
                        }
                        return searchModel(query);
                      }}
                    />
                  </Toolbar>
                </AppBar>
                {ModelListActions && <ModelListActions {...Actions} />}
                {viewOption === 0 && (
                  <Grid container>
                    {defaultView ? (
                      defaultView
                    ) : (
                      <ModelListItems
                        models={models}
                        classes={classes}
                        gridSizes={gridSizes}
                        ModelListItemComponent={ModelListItemComponent}
                        deleteModel={deleteModel}
                        updateModel={updateModel}
                        columnNumber={columnNumber}
                        page={page}
                        history={history}
                        match={match}
                        onView={onViewWrapper}
                        onEdit={onEditWrapper}
                        loading={loading}
                      />
                    )}
                  </Grid>
                )}
                {viewOption === 1 && (
                  <Table
                    title={modelName}
                    columns={columns.map((col, i) => {
                      return {
                        label: col,
                        id: i
                      };
                    })}
                    rows={models}
                    count={modelArray && modelArray.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    setPage={setPage}
                    setRowsPerPage={setRowsPerPage}
                  />
                )}
                {noPagination ? (
                  <></>
                ) : (
                  <Paper>
                    <Grid
                      justify={"flex-start"}
                      style={{ position: "fixed", bottom: "0" }}
                      container
                    >
                      <Grid item>
                        <Paper>
                          <TablePagination
                            rowsPerPageOptions={[5]}
                            component="div"
                            count={modelArray && modelArray.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                              "aria-label": "Previous Page"
                            }}
                            nextIconButtonProps={{
                              "aria-label": "Next Page"
                            }}
                            onChangePage={(event, page) => {
                              setPage(page);
                            }}
                            onChangeRowsPerPage={event =>
                              setRowsPerPage(event.target.value)
                            }
                          />
                        </Paper>
                      </Grid>
                      <Grid item>
                        <FloatingAddButton onClick={onAddWrapper} />
                      </Grid>
                    </Grid>
                  </Paper>
                )}
              </React.Fragment>
            );
          }}
        />
        <ClientNotification
          notifications={notifications}
          handleClose={(event, reason, notification) => {
            removeNotification(notification);
          }}
        />
      </>
    );
  }
);

export default withStyles(styles)(ModelList);
