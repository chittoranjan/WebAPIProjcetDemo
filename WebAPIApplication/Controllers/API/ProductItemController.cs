using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPIApplication.EFModels;
using WebAPIApplication.ProjectDataBase;

namespace WebAPIApplication.Controllers.API
{
    public class ProductItemController : ApiController
    {
        private ProjectDB db = new ProjectDB();

        // GET: api/ProductItem
        public IHttpActionResult GetProductItems()
        {
            var productItem= db.ProductItems.ToList();
            return Ok(productItem);
        }

        // GET: api/ProductItem/5
        [ResponseType(typeof(ProductItem))]
        public IHttpActionResult GetProductItem(int id)
        {
            ProductItem productItem = db.ProductItems.Find(id);
            if (productItem == null)
            {
                return NotFound();
            }

            return Ok(productItem);
        }
       
        // PUT: api/ProductItem/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProductItem(int id, ProductItem productItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productItem.Id)
            {
                return BadRequest();
            }

            db.Entry(productItem).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ProductItem
        [ResponseType(typeof(ProductItem))]
        public IHttpActionResult PostProductItem(ProductItem productItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ProductItems.Add(productItem);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = productItem.Id }, productItem);
        }

        // DELETE: api/ProductItem/5
        [ResponseType(typeof(ProductItem))]
        public IHttpActionResult DeleteProductItem(int id)
        {
            ProductItem productItem = db.ProductItems.Find(id);
            if (productItem == null)
            {
                return NotFound();
            }

            db.ProductItems.Remove(productItem);
            db.SaveChanges();

            return Ok(productItem);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductItemExists(int id)
        {
            return db.ProductItems.Count(e => e.Id == id) > 0;
        }
    }
}