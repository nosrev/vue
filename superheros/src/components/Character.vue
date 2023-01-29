<script setup>
defineProps({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    powerstats: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <i-card class="_margin-bottom:4">
        <template #image>
            <img :src="image" :alt="name" />
        </template>
        <h4 class="card-title _text-align:center">
            {{ name }}
        </h4>

        <div class="infos">
          <span>
            <i-icon name="fas-brain" />{{ powerstats.intelligence }}
          </span>
          <span>
            <i-icon name="fas-dumbbell"/>{{ powerstats.strength }}
          </span>
          <span>
            <i-icon name="fas-running"/>{{ powerstats.speed }}
          </span>
          <span>
            <i-icon name="fas-battery-three-quarters"/>{{ powerstats.durability }}
          </span>
          <span>
            <i-icon name="fas-bolt"/>{{ powerstats.power }}
          </span>
          <span>
            <i-icon name="fas-user-ninja"/>{{ powerstats.combat }}
          </span>
        </div>
    </i-card>
</template>

<style lang="scss" scoped>
.infos {
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    svg {
      flex-basis: 100%;
      fill: var(--color--primary);
      margin-bottom: 4px;
      height: 22px;
    }
  }
}

@media screen and (max-width: 1030px) {
  .infos {
    span {
      font-size: 12px;

      svg {
        height: 18px;
      }
    }
  }

  .card-title {
    font-size: 18px;
  }
}

@media screen and (max-width: 830px) {
  .infos {
    span {
      font-size: 10px;

      svg {
        height: 14px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .infos {
    span {
      font-size: 16px;

      svg {
        height: 24px;
      }
    }
  }
}
</style>
