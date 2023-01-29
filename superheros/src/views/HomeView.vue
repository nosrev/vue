<script setup>
import Character from '../components/Character.vue'
</script>

<script>
export default {
    data () {
        return {
            characters: [],
            filtered: [],
            loading: true
        };
    },
    mounted: function () {
        this.axios.get('/all.json').then((response) => {
            this.characters = response.data;
            this.filtered = response.data;
        })
        .finally(() => (this.loading = false))
    },
    methods: {
        filterCharacter: function (value) {
            if (value) {
                let filtered = this.characters.filter(character => character.name.toLowerCase().includes(value) );
                this.filtered = filtered;
            } else {
                this.filtered = this.characters;
            }
        }
    }
}
</script>

<template>
    <i-layout>
        <i-layout-header class="_background:primary _padding-y:2 _margin-bottom:4">
            <i-container>
                <i-input placeholder="Digite o nome de um personagem" @input="event => filterCharacter(event.target.value)" />
            </i-container>
        </i-layout-header>
        <i-layout-content>
            <div v-if="loading">
                <div class="_display:flex _justify-content:center">
                    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
            <div v-else>
                <div v-if="filtered.length < 1">
                    <div class="_display:flex _justify-content:center">
                        <p>
                            Nenhum personagem encontrado
                        </p>
                    </div>
                </div>
                <div v-else>
                    <i-container>
                        <i-row>
                            <i-column xs="12" sm="6" md="3" v-for="character in filtered" :key="character.id">
                                <Character :id="character.id" :name="character.name" :image="character.images.md" :powerstats="character.powerstats"  />
                            </i-column>
                        </i-row>
                    </i-container>
                </div>
            </div>
        </i-layout-content>
    </i-layout>
</template>
