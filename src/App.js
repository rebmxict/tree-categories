import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Container,
  Grid,
} from '@material-ui/core';
import { useStyles } from './components/Styles';

import axios from 'axios';
import { API_SERVER } from './config';

import MainCategory from './components/MainCategory';
import Category from './components/Category';
import SubCategory from './components/SubCategory';
import SelectedCategory from './components/SelectedCategory';

function App() {
  const classes = useStyles();

  const [allSelected, setAllSelected] = useState({});
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState(-1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [selectedSubCategory, setSelectedSubCategory] = useState(-1);
  const [subCategories, setSubCategories] = useState([]);

  const getCategories = async (artId) => {
    const endpoint = `${API_SERVER}/${artId > 0 ? artId : ''}`;
    const data = await axios.get(endpoint);
    const { articles } = data.data;
    return articles;
  }

  const exploreCategories = async (artId, index, to) => {
    if (to === 'categories') {
      if (categories[index].subCategories) {
        const withPastData = [...categories];
        withPastData[index]['subCategoryOpen'] = true;
        setCategories(withPastData);
        setSelectedCategory(index);
      }
    } else {
      if (subCategories[index]?.subCategories) {
        return false;
      }
    }

    const exploreSubCategories = await getCategories(artId);

    if (to === 'categories') {
      const withPastData = [...categories];
      withPastData[index]['subCategories'] = exploreSubCategories;
      withPastData[index]['subCategoryOpen'] = true;
      setCategories(withPastData);
      setSelectedCategory(index);

      initializeAllSelected(exploreSubCategories);
    } else {
      initializeAllSelected(exploreSubCategories);
      return exploreSubCategories;
    }
  }

  const isChecked = (artId) => {
    while (artId) {
      if (!allSelected[artId]?.checked) {
        artId = allSelected[artId]?.parent;
      } else {
        return true;
      }
    }
    return false;
  }

  const updateCheck = (artId) => {
    setAllSelected(prev => ({
      ...prev,
      [artId]: {
        ...prev[artId],
        checked: !prev[artId].checked
      }
    }));
  }

  const initializeAllSelected = (categories) => {
    const _allSelected = {...allSelected};
    categories.forEach(category => {
      _allSelected[category.artId] = {
        checked: false,
        parent: category.artParentId,
        title: category.artTitle,
      };
    });
    setAllSelected(_allSelected);
  }

  useEffect(async () => {
    const _mainCategories = await getCategories(-1);
    setMainCategories(_mainCategories);

    initializeAllSelected(_mainCategories);

    // eslint-disable-next-line
  }, []);

  useEffect(async () => {
    if (selectedMainCategory < 0) return;
    const _categories = await getCategories(mainCategories[selectedMainCategory]?.artId);
    setCategories(_categories);

    initializeAllSelected(_categories);

    // eslint-disable-next-line
  }, [selectedMainCategory]);

  useEffect(async () => {
    if (selectedSubCategory < 0) return;
    const _subCategories = await getCategories(categories[selectedCategory].subCategories[selectedSubCategory]?.artId);
    for (let i = 0; i < _subCategories.length; i ++) {
      const attachSubCategories = await exploreCategories(_subCategories[i].artId, i, 'to');
      if (attachSubCategories !== false)
        _subCategories[i]['subCategories'] = attachSubCategories;
    }
    setSubCategories(_subCategories);

    initializeAllSelected(_subCategories);

    // eslint-disable-next-line
  }, [selectedSubCategory]);

  return (
    <Container maxWidth='md'>
      <MainCategory
        mainCategories={mainCategories}
        selectedMainCategory={selectedMainCategory}
        setSelectedMainCategory={setSelectedMainCategory}
      />
      <Grid container className={classes.categoryContainer}>
        <Category
          categories={categories}
          setCategories={setCategories}
          exploreCategories={exploreCategories}
          setSelectedSubCategory={setSelectedSubCategory}
          isChecked={isChecked}
          updateCheck={updateCheck}
        />
        <SubCategory
          subCategories={subCategories}
          isChecked={isChecked}
          updateCheck={updateCheck}
        />
      </Grid>
      <SelectedCategory
        allSelected={allSelected}
        setAllSelected={setAllSelected}
      />
    </Container>
  );
}

export default App;
