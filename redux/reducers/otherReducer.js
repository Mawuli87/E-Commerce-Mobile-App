import { createReducer } from "@reduxjs/toolkit";


export const otherReducer = createReducer({}, (builder) => {
    
      //password
    builder
    .addCase("updatePasswordRequest", (state) => {
      state.loading = true;
    })

    .addCase("updatePasswordSuccess", (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })

      .addCase("updatePasswordFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

        //profile

        .addCase("updateProfileRequest", (state) => {
            state.loading = true;
          })

          .addCase("updateProfileSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
          })

          .addCase("updateProfileFail", (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })

          //update profile picture

          .addCase("updatePicRequest", (state) => {
            state.loading = true;
          })

          .addCase("updatePicSuccess", (state, action) => {
            state.loading = false;
            state.message = action.payload;
          })

          .addCase("updatePicFail", (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })

        //place order
        
        .addCase("placeOrderRequest", (state) => {
          state.loading = true;
        })
        .addCase("placeOrderSuccess", (state, action) => {
          state.loading = false;
          state.message = action.payload;
        })
        .addCase("placeOrderFail", (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })

        //process order
        .addCase("processOrderRequest", (state) => {
          state.loading = true;
        })

        .addCase("processOrderSuccess", (state, action) => {
          state.loading = false;
          state.message = action.payload;
        })

        .addCase("processOrderFail", (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })



      builder.addCase("clearError", (state) => {
        state.error = null;
      });
      builder.addCase("clearMessage", (state) => {
        state.message = null;
      });

});